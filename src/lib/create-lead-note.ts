/**
 * Creates a lead note in the Obsidian vault via the GitHub API.
 *
 * The vault repo is Levy787/quilliam-ai-notes. Notes land in Ops/Leads/
 * and follow the vault's frontmatter conventions (see CLAUDE.md).
 *
 * Requires GITHUB_VAULT_TOKEN env var — a fine-grained personal access
 * token with Contents read/write permission on the vault repo.
 *
 * Fails silently (logs error, does not throw) so a GitHub API failure
 * never blocks the booking confirmation flow.
 */

const REPO_OWNER = "Levy787";
const REPO_NAME = "quilliam-ai-notes";
const LEAD_DIR = "Ops/Leads";

interface LeadData {
  name: string;
  email: string;
  phone?: string;
  business: string;
  businessType: string;
  interest: string;
  message?: string;
}

export async function createLeadNote(data: LeadData): Promise<void> {
  const token = process.env.GITHUB_VAULT_TOKEN;
  if (!token) {
    console.warn("GITHUB_VAULT_TOKEN not set — skipping lead note creation");
    return;
  }

  const today = new Date().toISOString().slice(0, 10);
  const slug = `${today} ${data.name} — ${data.business}`;
  const path = `${LEAD_DIR}/${slug}.md`;

  const content = `---
type: lead
date: ${today}
tags:
  - lead
status: new
interest: "${data.interest}"
business_type: "${data.businessType}"
email: "${data.email}"
---

# ${data.name} — ${data.business}

| Field | Value |
|---|---|
| **Name** | ${data.name} |
| **Email** | ${data.email} |
| **Phone** | ${data.phone || "—"} |
| **Business** | ${data.business} |
| **Type** | ${data.businessType} |
| **Interest** | ${data.interest} |
| **Date** | ${today} |

${data.message ? `## What they need\n\n${data.message}` : ""}

## Follow-up

- [ ] Reply within 24 hours
- [ ] Schedule AI Audit / training session
- [ ] Add to engagement pipeline if proceeding
`;

  try {
    const res = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${encodeURIComponent(path)}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
        body: JSON.stringify({
          message: `New lead: ${data.name} — ${data.business}`,
          content: Buffer.from(content).toString("base64"),
        }),
      },
    );

    if (!res.ok) {
      const body = await res.text();
      console.error(`GitHub API error creating lead note (${res.status}):`, body);
    }
  } catch (err) {
    console.error("Failed to create lead note in vault:", err);
  }
}
