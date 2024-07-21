
import { categoryname } from '../../../redux/ShopSlice'
import { useDispatch, useSelector } from 'react-redux'
export const Searchinput = () => {

    return (
        <>
            <form className="form">
                <input class="form-control" style={{ paddingRight: '100px' }} type="search" placeholder="Search" aria-label="Search" />
            </form>

        </>
    )
}
// d-none d-lg-inline
//  className='products-select-tag py-0 px-0 d-none d-lg-flex'
export const Productsselecttag = () => {
    const { category } = useSelector((state) => state.Shopdata)
   
    const dispatch = useDispatch()
    const handelchange = (e) => {

        dispatch(categoryname(e,category))

    }
    return (
        <>
            <select name="products " id="products" onChange={(e) => handelchange((e.target.value))} style={{ height: '35px' }}>
                <option >beauty</option>
                <option>fragrances</option>
                <option > groceries</option>
                <option >furniture</option>

                <option value="other" selected>other</option>
            </select>
        </>
    )
}
