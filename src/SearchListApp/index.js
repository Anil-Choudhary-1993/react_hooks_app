import React from 'react';
import './index.css';

const InitailPath = 'https://hn.algolia.com/api/v1/search';

function SeacrhList() {
  let [search, setSearch] = React.useState('');
  let [query, setQuery] = React.useState(InitailPath)
  let [data, setData] = React.useState([]);
  let [loading, setLoading] = React.useState(false);
  let [error, setError] = React.useState('');

  const fetchData = React.useCallback(async () => {
    setLoading(true);
    setData([]);
    setError('');
    try {
      let result = await fetch(query);
      result = await result.json();
      setData(result.hits);
    } catch (err) {
      console.log(err);
      setError(JSON.stringify(err));
    } finally {
      setLoading(false);
    }
  }, [query])

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="search_container">
      <div className="input_group">
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
        <button onClick={() => setQuery(`${InitailPath}?query=${search}`)}>Search</button>
      </div>
      <div className="content">
        {error && <h1>{error}</h1>}
        {loading && <h3>Loading...</h3>}
        {
          data?.length > 0 && <ul>
            {data.map((result, index) => (<li key={index}>
              <b>{result.author}</b>
              <i>{result.title}</i>
            </li>
            ))
            }
          </ul>
        }
      </div>
    </div>
  );
}

export default SeacrhList;
