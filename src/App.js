function App() {
  const db = [
    {
      inputFile: './media/input/input_audio_1.wav',
      outputFile: './media/output/output_audio_1.wav'
    }
  ]

  return (
    <div className="App">
      {db.map(item => {
        return (
          <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th><h1>Input Audio</h1></th>
                <th>              <h1>Output Audio</h1>
          </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><audio src={require(`${item?.inputFile}`)} controls/></td>
                <td><audio src={require(`${item?.outputFile}`)} controls/></td>
              </tr>
            </tbody>
          </table>
          </div>
        )
        }
      )}
    </div>
  );
}

export default App;
