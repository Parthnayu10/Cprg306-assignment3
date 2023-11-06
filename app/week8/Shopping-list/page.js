import { useUserAuth } from '../../week8/_utils/auth-context';
import { useRouter } from 'next/router';

const ShoppingListPage = () => {
  const { user } = useUserAuth();
  const router = useRouter();

  // Check if the user is not logged in, then redirect to the landing page
  if (!user) {
    router.push('/'); // Redirect to the landing page
    return null; // Prevent rendering the shopping list page
  }

  return (
    <div>
      <h1>Shopping List</h1>
      {/* Your shopping list component */}
    </div>
  );
};

export default ShoppingListPage;
