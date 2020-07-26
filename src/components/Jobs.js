import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  //Destructuring query
  const {
    allStrapiJobs: { nodes: jobs },
  } = data

  //State for dynamic Job select. 0 by default to access the first item in the button container
  const [value, setValue] = React.useState(0)

  //Destructuring properties inside jobs array getting index state selected
  const { company, position, date, desc } = jobs[value]
  //console.log(company, position, date, desc)

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        {/* button container */}
        <div className="btn-container">
          {/* index is to compare between index and state to set active style on the button selected. 
          0 by default*/}
          {/* if index is equal to value in state, the classname is active-btn */}
          {jobs.map((job, index) => {
            return (
              <button
                key={job.strapiId}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {job.company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(description => {
            return (
              <div key={description.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{description.name}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
