import React, { PropTypes } from 'react'
import SourceMap from './SourceMap'

const FeatureList = ({ view, data }) => (
  <div className='container index-map-container feature-list-container'>
    {data.map(d => {
      return (
        <div className='row source-row' key={d.properties.source_id}>
          <div className='eight columns'>
            <h4>{d.properties.name}</h4>
            <p>{d.properties.authors} ({d.properties.ref_year}). <i>{d.properties.ref_title}</i>. <span className={d.properties.ref_source ? '' : 'hide'}>{d.properties.ref_source}.</span> <span className={d.properties.isbn_doi ? '' : 'hide'}>{d.properties.isbn_doi}.</span> Retrieved from <a href={d.properties.url} target='_blank'>{d.properties.url}</a>. </p>
            <table>
              <tbody>
                <tr>
                  <td><b>Source ID</b></td>
                  <td>{d.properties.source_id}</td>
                </tr>
                <tr>
                  <td><b>Scale</b></td>
                  <td><span className={"badge left scale-badge " + d.properties.scale}>{d.properties.scale}</span></td>
                </tr>
                <tr>
                  <td><b>Features</b></td>
                  <td>{d.properties.features}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='four columns'>
            <SourceMap feature={d}/>
          </div>
        </div>
      )
      return <p>{d.name}</p>
    })}
  </div>
)

FeatureList.propTypes = {
  data: PropTypes.array.isRequired,
  view: PropTypes.string.isRequired
}

export default FeatureList
