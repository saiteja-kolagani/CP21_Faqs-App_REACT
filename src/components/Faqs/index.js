// Write your code here.

import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="bg-container">
      <main className="content-cotaner">
        <h1 className="heading">FAQs</h1>
        <ul className="unordered-list-container">
          {faqsList.map(each => (
            <FaqItem objData={each} key={each.id} />
          ))}
        </ul>
      </main>
    </div>
  )
}

export default Faqs
