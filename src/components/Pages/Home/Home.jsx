import SliderHome from '../../../components/HomeSlider/HomeSlider'
import FeatureProduct from '../../FeatureProduct/FeatureProduct'
import HomeCatagories from '../../HomeCatagories/HomeCatagories'
import HomeDeals from '../../HomeDeals/HomeDeals'
import HomeFeature from '../../HomeFeature/HomeFeature'

export default function Home() {
  return <>
    <SliderHome />
    <div className='container'>
      <HomeFeature />
      <HomeCatagories />
      <HomeDeals />
      <FeatureProduct />

    </div>
  </>
}
