import { EditorContent, EditorContext, useEditor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import { Underline } from '@tiptap/extension-underline'
import { Superscript } from '@tiptap/extension-superscript'
import { Subscript } from '@tiptap/extension-subscript'
import { MarkButton } from '@/Components/tiptap-ui/mark-button'

import '@/components/tiptap-node/code-block-node/code-block-node.scss'
import '@/components/tiptap-node/paragraph-node/paragraph-node.scss'

export default function MyEditor() {
    const editor = useEditor({
        immediatelyRender: false,
        extensions: [StarterKit, Underline, Superscript, Subscript, ],
        content: `
        You can type here....
        `,
    })

    return (
        <div className='flex justify-center'>
            <div className='flex mx-40 border-2 border-green-600 justify-center h-[400px] w-[400px]'>
                <EditorContext.Provider value={{ editor }}>
                    <div>
                        <div className="tiptap-button-group flex justify-center" data-orientation="horizontal">
                            <MarkButton type="bold" />
                            <MarkButton type="italic" />
                            <MarkButton type="strike" />
                            <MarkButton type="code" />
                            <MarkButton type="underline" />
                            <MarkButton type="superscript" />
                            <MarkButton type="subscript" />
                        </div>

                        <EditorContent editor={editor} role="presentation" className='flex justify-center control-showcase '/>
                    </div>
                </EditorContext.Provider>
            </div>
        </div>
    )
}
