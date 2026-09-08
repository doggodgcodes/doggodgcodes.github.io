# Repository instructions

- Read the current file and nearby related code before making changes. The repository may contain user edits, so preserve unrelated work.
- Prefer small, focused fixes that address the root cause. Do not reformat an entire file unless formatting is the task.
- For HTML, use two spaces per indentation level. Keep matching opening and closing tags aligned, including nested `div`, `main`, `section`, `header`, and `footer` elements.
- Keep commented-out HTML internally indented as HTML, but do not treat tags inside comments as live document structure.
- Preserve the existing visual style, links, scripts, and public behavior unless the request specifically changes them.
- Before editing, identify one likely cause and one focused check that could disprove it.
- After editing, run the narrowest available validation, such as editor diagnostics, a targeted test, or a syntax check.
- Do not commit or push changes unless explicitly requested. When a commit is requested, use a concise message and report it even if the commit fails.
- Do not add comments to code unless they clarify a non-obvious decision.