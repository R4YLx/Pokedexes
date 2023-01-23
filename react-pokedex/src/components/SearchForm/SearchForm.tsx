import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { FormEvent, useRef } from 'react'
import Button from '../Button'
import { SearchFormProps } from './SearchForm.types'

const SearchForm = ({ className, onSearch, ...rest }: SearchFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (!inputRef.current?.value.length) {
      return null
    }

    onSearch(inputRef.current.value)
    inputRef.current.value = ''
  }

  return (
    <form
      className={`flex items-center justify-center gap-2 ${className}`}
      {...rest}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search for a Pokémon"
        className="rounded-md h-10 indent-2 bg-green-600 border border-black placeholder-stone-700 w-full"
        ref={inputRef}
      />

      <Button type="submit" bgColor="yellow">
        <MagnifyingGlassIcon className="h-6 w-6" />
      </Button>
    </form>
  )
}

export default SearchForm
