import { useEffect } from 'react'

const customUseEffect = ({ status, value }) => {

    if (status === mount) {
        return useEffect(() => {

        }, [])
    } else if (status === update) {
        return useEffect(() => {

            return () => {

            }
        }, [value])
    } else {
        return useEffect(() => {
            return () => {

            }
        })
    }
}
export default customUseEffect;