import Image from 'next/image';
import { Grid } from '@material-ui/core'

const Logo = () => {
    return (
        <Grid item>
            <Image src='/images/logo-version-01.png' alt='logo' width='180' height='180' />
        </Grid>
    )
}

export default Logo