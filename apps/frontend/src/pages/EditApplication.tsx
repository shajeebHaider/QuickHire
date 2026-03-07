import { useParams } from 'react-router-dom';
import { useApplication } from '../api-hooks/useApplications';

const EditApplication = () => {
  const params = useParams();

  const { data: application } = useApplication(params.id);
  console.log(application);

  return <div>EditApplication</div>;
};

export default EditApplication;
