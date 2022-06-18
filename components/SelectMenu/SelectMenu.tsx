import React from 'react'
import { Combobox, Transition } from '@headlessui/react'

const menuList = [
    { id: 1, name: 'span' },
    { id: 1, name: 'heading 1' },
    { id: 1, name: 'heading 2' },
    { id: 1, name: 'input' },
    { id: 1, name: 'paragraph' },
]

export const SelectMenu = () => {
    const [menu, setMenu] = React.useState({
        x: 0,
        y: 0,
        show: false,
    })
    const [selected, setSelected] = React.useState(menuList[0])
    const [query, setQuery] = React.useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        let coordinates = e.currentTarget.getBoundingClientRect()

        if (value.includes('/')) {
            setMenu((prev) => ({
                ...prev,
                show: true,
                x: coordinates.x,
                y: coordinates.y + 32,
            }))
        } else {
            setMenu((prev) => ({ ...prev, show: false }))
            return
        }

        let searchedValue = value.split('/')[1]
        setQuery(searchedValue)
    }

    const filteredMenu =
        query === ''
            ? menuList
            : menuList.filter((item) =>
                  item.name
                      .toLowerCase()
                      .replace(/\s+/g, '')
                      .includes(query.toLowerCase().replace(/\s+/g, ''))
              )

    const handleSelectionChange = (newValue: typeof selected) => {
        window.alert(`You selected: ${newValue.name}`)
        setSelected(newValue)
    }

    return (
        <Combobox
            value={selected}
            onChange={(changedValue) => handleSelectionChange(changedValue)}
        >
            {({ open }) => (
                <div className="flex flex-col my-8 w-max min-w-[200px]">
                    <Combobox.Input
                        className="block px-4 py-2 mb-1 border"
                        onChange={(e) => handleChange(e)}
                        placeholder="Type '/' to see different items"
                    />

                    <Transition
                        show={menu.show && open}
                        enter="transform transition duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transform duration-200 transition ease-in-out"
                        leaveFrom="opacity-100 scale-100 "
                        leaveTo="opacity-0 scale-95"
                        afterLeave={() => {
                            setQuery('')
                        }}
                    >
                        <Combobox.Options>
                            {filteredMenu.length === 0 && query !== '' ? (
                                <div className="relative px-4 py-2 text-gray-700 cursor-default select-none">
                                    Nothing found.
                                </div>
                            ) : (
                                filteredMenu.map((person) => (
                                    <Combobox.Option
                                        key={person.id}
                                        value={person}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active
                                                    ? 'bg-teal-600 text-white'
                                                    : 'text-gray-900'
                                            }`
                                        }
                                    >
                                        {person.name}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            )}
        </Combobox>
    )
}
