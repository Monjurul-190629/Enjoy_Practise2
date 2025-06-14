import { useEditor, EditorContent } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'

import '@/components/tiptap-node/paragraph-node/paragraph-node.scss'

export default function BasicEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `
      Everything is good... 
    `,
  })

  return <EditorContent editor={editor} className="control-showcase" />
}
