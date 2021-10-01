import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page b', uv: 200, pv: 2400, amt: 2400},{name: 'Page c', uv: 100, pv: 2400, amt: 2400}];

const Chartprofile = ()=>(
  <div  style={{width:"100%",height:"400px"}} className="bg-green-100 rounded-sm">
<LineChart width={700} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
  </div>
  
);

export default Chartprofile