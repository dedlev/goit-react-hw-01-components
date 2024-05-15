import data from "../data.json"

export const StatisticsTitle = () => {
  return (
<section className="statistics">
    {data.title && (
      <h2 className="title">{data.title}</h2>
    )}
  </section>
  )
  }