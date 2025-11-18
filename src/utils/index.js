export const compareDates = (a, b) => {
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
}
