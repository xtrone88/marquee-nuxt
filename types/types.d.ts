export interface Block {
  type: string
  headline: string
  subhead: string
  cta: string
  background: string
}

export interface Page {
  title: string
  slug: string
  blocks: Block[]
}
