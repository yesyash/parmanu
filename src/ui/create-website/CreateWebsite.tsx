import { SelectMenu } from '@/components/SelectMenu'
import React from 'react'
import { useStore } from './hooks/useCreateSite'

const createWebsite = () => {
    const state = useStore()
    return (
        <>
            <div className="m-8">
                <SelectMenu />
            </div>

            <div>
                {state.blocks.map((block) => (
                    <div className="flex items-center">
                        {React.createElement(block.type, {
                            className: 'block my-2',
                            dangerouslySetInnerHTML: {
                                __html: block.content,
                            },
                        })}

                        <div className="ml-4">
                            <button onClick={() => state.removeBlock(block.id)}>
                                remove Block
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4">
                <div>
                    <button onClick={() => state.addBlock('p')}>
                        Add block
                    </button>
                </div>
            </div>
        </>
    )
}

export default createWebsite
