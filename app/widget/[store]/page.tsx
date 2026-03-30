import { redirect } from "next/navigation"

export default async function OldWidgetRoute({
  params,
  searchParams,
}: {
  params: Promise<{ store: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { store } = await params
  const sParams = await searchParams

  const urlSearchParams = new URLSearchParams()
  Object.entries(sParams).forEach(([key, value]) => {
    if (value !== undefined) {
      if (Array.isArray(value)) {
        value.forEach((v) => urlSearchParams.append(key, v))
      } else {
        urlSearchParams.append(key, value)
      }
    }
  })

  const queryString = urlSearchParams.toString()
  redirect(`/embed/${store}${queryString ? `?${queryString}` : ""}`)
}
