import Home from '@/pages/Home';
import About from '@/pages/About';
import Login from '@/pages/Login';
import NotFound from '@/components/NotFound';
import UserInfo from '@/pages/UserInfo';

const routes = [{
  path: '/about',
  component: About,
}, {
  path: '/login',
  component: Login,
}, {
  path: '/',
  exact: true,
  component: Home,
},
{
  path: '/user/:id',
  exact: true,
  component: UserInfo
},
{
  component: NotFound,
}];

export default routes;