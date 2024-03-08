/* eslint-disable unicorn/filename-case */
import './App.css'
import Layout from '../components/Layout'
import AppBar from '../components/AppBar'
import ToDoForm from '../components/ToDoForm'
import ToDoList from '../components/ToDoList'
import Header from '../components/Header'

function App() {
  return (
    <>
      <Header />
      <Layout>
        <AppBar />
        <ToDoForm />
        <ToDoList />
      </Layout>
    </>
  )
}

export default App
