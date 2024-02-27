
import TableRow from './TableRow';

const Table = ({coins,currency}) => {

    return (
        <table>
            <thead>
                <tr className=''>
                    <th>Rank</th>
                    <th>Symbol</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Market Cap</th>
                    <th>24h %</th>
                    <th>static</th>
                </tr>
            </thead>
            <tbody>
                {coins.map((coin) => <TableRow key={coin.id} coin={coin} currency={currency} />)}
            </tbody>
        </table>
    );
};

export default Table;