import React from "react"
import ContentLoader from "react-content-loader" 

const LandingPageContentLoader = () => (
  <ContentLoader 
  speed={2}
  width={800}
  height={800}
  viewBox="0 0 800 800"
  backgroundColor="#f3f3f3"
  foregroundColor="#ecebeb"
  >

    <rect x="0" y="56" rx="3" ry="3" width="250" height="250" /> 

  </ContentLoader>
)

export default LandingPageContentLoader