import { ColorRing } from "react-loader-spinner";


export const Loader = () => {

    return (<ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{
            display: 'flex',
            justifyContent: 'center',
            marginLeft: '790px',
            marginTop: '50px'
        }}
        wrapperClass="blocks-wrapper"
        colors={['#7070e4', '#3434ca', '#1e1e7f', '#8b8bcd', '#3c3c70']}
    />)

}
