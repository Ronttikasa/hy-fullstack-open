const FilterForm = ({filter, handler}) => {
  return (
    <form>
      <div>
        filter shown with:&nbsp;
        <input
          value={filter}
          onChange={handler} />
      </div>
    </form>
  )
}

export default FilterForm