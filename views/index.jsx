const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads, title}) {
  return (
    <Default title={title}>
      <h2>Index Page</h2>
      {/* This is a JSX comment */}
      {/* <p>I have {breads[3].name} bread!</p> */}
        <ul>
          {
            breads.map((bread, index) => {
              return (
                <li key={index}>
                  <a href={`/breads/${index}`}>
                    {bread.name}
                  </a>
                </li>
              )
            })
            /* In JSX, we cannot use a for loop but must utilize the .map() array method. The .map() function takes a callback as an argument. The callback requires a minimum of one argument. The first is the item in the array we are iterating over. The second argument is optional and will be the index position of the array item.*/
          }
        </ul>
    </Default>
  )
}

module.exports = Index