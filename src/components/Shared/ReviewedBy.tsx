const isPlaceholder = (v?: string) => !v || !v.trim() || v.trim().startsWith("TODO");

/**
 * "Reviewed by <name> on <date>" line for health-related pages.
 * Renders nothing until BOTH props are real values, so placeholders never reach the page.
 * Pass the review date as ISO (YYYY-MM-DD).
 */
export const ReviewedBy = ({ name, date }: { name?: string; date?: string }) => {
  if (isPlaceholder(name) || isPlaceholder(date)) return null;
  const parsed = new Date(`${date}T00:00:00`);
  const label = Number.isNaN(parsed.getTime())
    ? date
    : parsed.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  return (
    <p className="mt-8 text-center text-sm text-gray-700">
      Reviewed by {name} on <time dateTime={date}>{label}</time>
    </p>
  );
};
