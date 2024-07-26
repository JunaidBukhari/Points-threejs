import PointCloud from './PointCloud';
import { points } from './points';

export default function App() {
  return (
    <div style={{ height: '50vh', margin: '5em 0em' }}>
      <PointCloud points={points} />
    </div>
  );
}
