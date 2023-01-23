export interface SearchFormProps extends React.HTMLAttributes<HTMLFormElement> {
  onSearch(query: string): void
}
