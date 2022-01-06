import { useState, useContext } from "react"
import { formatter } from '../utils/helper'
import ProductOptions from "./ProductOptions"
import { CartContext } from "../context/shopContext"

export default function ProductForm({product}) {

    const { addToCart } = useContext(CartContext)

    const allVariantOptions = product.variants.edges?.map(variant => {
        const allOptions = {}
  
        variant.node.selectedOptions.map(item => {
            allOptions[item.name] = item.value
        })

        return {
            id: variant.node.id,
            title: variant.node.title,
            handle: variant.node.handle,
            image: variant.node.image?.orginalSrc,
            options: allOptions,
            variantTitle: variant.node.title,
            variantPrice: variant.node.priceV2.amount,
            variantQuantity: 1
        }
    })

    const defaultValues = {}
    product.options.map(item => {
        defaultValues[item.name] = item.values[0]
    })

    const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0])
    const [selectedOptions, setSelectedOptions] = useState(defaultValues)

    function setOptions(name, value) {
        setSelectedOptions(prevState => {
            return { ...prevState, [name]: value }
        })

        const selection = {
            ...selectedOptions,
            [name]: value
        }

        allVariantOptions.map(item => {
            if (JSON.stringify(item.options) === JSON.stringify(selection)) {
            setSelectedVariant(item)
            }
        })
    }

    return (
        <div className="rounded-2xl p-4 shadow-lg flex flex-col w-full md:w-1/3">
            <h2 className="text-2xl font-bold">{product.title}</h2>
            <span className="pb-3">{formatter.format(product.variants.edges[0].node.priceV2.amount)} </span>
            { product.options.length > 0 ?
            product.options.map(({name, values}) => (
                <ProductOptions 
                    key={`key-${name}`}
                    name={name}
                    values={values}
                    selectedOptions={selectedOptions}
                    setOptions={setOptions}
                    
                /> 
            )) : null
}
            <button onClick={() => {
                addToCart(selectedVariant)
            }}
                className="bg-black rounded-lg text-white px-2 mt-4 py-3 hover:bg-gray-800">Add To Cart</button>
        </div>
    )
}
