"use server"

import fs from 'fs/promises'
import path from 'path'
import XLSX from 'xlsx'
import { z } from 'zod'

const productSchema = z.object({
  id: z.coerce.number(),
  title: z.string(),
  description: z.string(),
  longDescription: z.string(),
  features: z.string(),
  image: z.string(),
  category: z.string(),
  ageGroup: z.string(),
  price: z.string(),
  rating: z.coerce.number(),
  reviews: z.coerce.number(),
  color: z.string(),
  type: z.enum(['courses', 'products']),
})

export type UploadState = {
  success: boolean
  message: string
  error?: string
}

export async function uploadProducts(
  prevState: UploadState | null,
  formData: FormData,
): Promise<UploadState> {
  try {
    const file = formData.get('file')
    if (!file || !(file instanceof File)) {
      return { success: false, message: 'Please provide a valid file.' }
    }

    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    const workbook = XLSX.read(buffer, { type: 'buffer' })
    const sheet = workbook.Sheets[workbook.SheetNames[0]]
    const rows = XLSX.utils.sheet_to_json<Record<string, any>>(sheet, { defval: '' })

    const products = rows.map((row) => {
      const parsed = productSchema.parse(row)
      return {
        ...parsed,
        features: parsed.features
          .split(',')
          .map((f) => f.trim())
          .filter(Boolean),
      }
    })

    const dataPath = path.join(process.cwd(), 'data', 'products.json')
    await fs.writeFile(dataPath, JSON.stringify(products, null, 2))

    return { success: true, message: 'Products uploaded successfully!' }
  } catch (err) {
    console.error('Failed to upload products:', err)
    return {
      success: false,
      message: 'Upload failed.',
      error: process.env.NODE_ENV === 'development' ? String(err) : undefined,
    }
  }
}
