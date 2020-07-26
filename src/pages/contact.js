import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="This is the contact page where we can get in touch!"
      />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form
            action="https://formspree.io/joan@joanbusquet.com"
            method="POST"
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                className="form-control"
              />
              <textarea
                name="message"
                id=""
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit form
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
