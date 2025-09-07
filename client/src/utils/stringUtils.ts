export const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/å/g, "a")
    .replace(/ä/g, "a")
    .replace(/ö/g, "o")
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9-_]/g, "")
