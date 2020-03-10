import React from 'react'

const App = () => {
  return (
  <div>
    <h1>Calculator!!!</h1>
    <table>
      <tr>
        <th>+</th>
        <th>-</th>
        <th>x</th>
        <th>/</th>
        <th>.</th>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <th colspan='2' rowspan='4'>=</th>
      </tr>
      <tr>
        <td>4</td>
        <td>5</td>
        <td>6</td>
      </tr>
      <tr>
        <td>7</td>
        <td>8</td>
        <td>9</td>
      </tr>
      <tr>
        <td colspan='3'>0</td>
      </tr>
    </table>
  </div>
  )
}

export default App

