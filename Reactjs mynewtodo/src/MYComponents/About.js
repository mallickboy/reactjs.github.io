import React from 'react'

const About = () => {
    let bodyContainer={
        minHeight:"80vh",
        margin:"15px auto",
        marginTop:"20px"
      }
  return (
    <div style={bodyContainer}>
      This is an about component
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, nisi fuga assumenda ab mollitia dolorum est facere illo qui voluptatem quos odio cumque voluptatum eligendi harum recusandae commodi doloribus tempore?</p>
    </div>
  )
}

export  {About}

{/* <Switch>
          <Route path="/" render={()=>{
            return(
              <>
            <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
            </>
            )
          }} >
          </Route>

          <Route path="/about">
            <About />
          </Route>
          
        </Switch>
         */}