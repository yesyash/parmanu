import create from 'zustand'

interface Block {
    id: string
    type: string
    content: string
}

interface Store {
    blocks: Block[]
    addBlock: (type: string) => void
    removeBlock: (id: string) => void
}

export const useStore = create<Store>((set) => ({
    blocks: [],

    addBlock: (type: string) => {
        set((state) => ({
            blocks: [
                ...state.blocks,
                {
                    id: Math.random().toString(),
                    type: type,
                    content: Math.random().toString(),
                },
            ],
        }))
    },

    removeBlock: (id: string) => {
        set((state) => ({ blocks: state.blocks.filter((i) => i.id !== id) }))
    },
}))
