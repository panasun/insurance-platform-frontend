// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

// ** Lib
import { format } from 'date-fns'

const Trade = () => {
  const createOrderBook = (
    premiumBidVolume,
    premiumBidPrice,
    premiumOfferPrice,
    premiumOfferVolume,
    coverageBidVolume,
    coverageBidPrice,
    coverageOfferPrice,
    coverageOfferVolume
  ) => {
    return {
      premiumBidVolume,
      premiumBidPrice,
      premiumOfferPrice,
      premiumOfferVolume,
      coverageBidVolume,
      coverageBidPrice,
      coverageOfferPrice,
      coverageOfferVolume
    }
  }

  const createLatestTrade = (type1, type2, volume, price, timestamp) => {
    return {
      type1,
      type2,
      volume,
      price,
      timestamp
    }
  }

  const rowsOrderBook = [
    createOrderBook(10000, 3.45, 3.58, 12000, 2000, 950.83, 955.44, 300),
    createOrderBook(10000, 3.42, 3.8, 12000, 2000, 945.91, 960.45, 300),
    createOrderBook(10000, 3.4, 3.93, 12000, 2000, 940.01, 969.72, 300),
    createOrderBook(10000, 3.35, 4.75, 12000, 2000, 937.91, 972.9, 300),
    createOrderBook(10000, 3.31, 5.2, 12000, 2000, 920.8, 973.11, 300)
  ]

  const rowsLatestTrade = [
    createLatestTrade('P', 'buy', 120, 3.48, new Date()),
    createLatestTrade('P', 'sell', 150, 3.4, new Date()),
    createLatestTrade('C', 'sell', 200, 948.92, new Date()),
    createLatestTrade('C', 'buy', 200, 948.92, new Date()),
    createLatestTrade('P', 'buy', 180, 3.58, new Date())
  ]

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Order Book'></CardHeader>
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={12} lg={8}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} size='small'>
                    <TableHead>
                      <TableRow>
                        <TableCell align='center' colSpan={4}>
                          Premium
                        </TableCell>
                        <TableCell align='center' colSpan={4}>
                          Coverage
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align='right'>Volume</TableCell>
                        <TableCell align='right'>Bid</TableCell>
                        <TableCell align='left'>Offer</TableCell>
                        <TableCell align='left'>Volume</TableCell>
                        <TableCell align='right'>Volume</TableCell>
                        <TableCell align='right'>Bid</TableCell>
                        <TableCell align='left'>Offer</TableCell>
                        <TableCell align='left'>Volume</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rowsOrderBook.map(row => (
                        <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell align='right'>{row.premiumBidVolume}</TableCell>
                          <TableCell align='right'>{row.premiumBidPrice.toFixed(2)}</TableCell>
                          <TableCell align='left'>{row.premiumOfferPrice.toFixed(2)}</TableCell>
                          <TableCell align='left'>{row.premiumOfferVolume}</TableCell>
                          <TableCell align='right'>{row.coverageBidVolume}</TableCell>
                          <TableCell align='right'>{row.coverageBidPrice.toFixed(2)}</TableCell>
                          <TableCell align='left'>{row.coverageOfferPrice.toFixed(2)}</TableCell>
                          <TableCell align='left'>{row.coverageOfferVolume}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid item xs={12} lg={4}>
                <TableContainer component={Paper}>
                  <Table size='small'>
                    <TableHead>
                      <TableRow>
                        <TableCell align='center' colSpan={5}>
                          Latest
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align='center'>Volume</TableCell>
                        <TableCell align='center'>Price</TableCell>
                        <TableCell align='center'>Type</TableCell>
                        <TableCell align='center'>Time</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rowsLatestTrade.map(row => (
                        <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell align='center'>{row.volume}</TableCell>
                          <TableCell align='center'>{row.price.toFixed(2)}</TableCell>
                          <TableCell align='center'>{row.type1}</TableCell>
                          <TableCell align='center'>{format(row.timestamp, "yyyy.MM.dd HH:MM")}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Trade
