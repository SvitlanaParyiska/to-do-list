import ToDoCounter from '../../components/ToDoCounter'
import Filter from '../../components/Filter'

function AppBar() {
  return (
    <section>
      <div style={{ 'display': 'flex', 'justifyContent': 'space-between' }}>
        <div>
          <h2>Tasks: </h2>
          <ToDoCounter />
        </div>
        <div>
          <h2>Filter by status</h2>
          <Filter />
        </div>
      </div>
    </section>
  )
}

export default AppBar
