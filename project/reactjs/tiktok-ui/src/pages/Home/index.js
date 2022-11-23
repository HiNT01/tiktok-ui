import UserItem from '../../components/User/UserItem';
import avatar from '../../assets/imgs/avatar-test.png';
const data = [
    {
        avatar: avatar,
        title: 'theanh28entertainment',
        name: 'theanh28 entertainment',
        type: true,
        follower: '4M',
        like: '90.000',
    },
    {
        avatar: avatar,
        title: 'theanh29entertainment',
        name: 'theanh29 entertainment',
        type: true,
        follower: '8M',
        like: '100.000',
    },
];
function Home() {
    return (
        <div style={{ width: '348px' }}>
            <h2>Home page</h2>
            {data.map((it, index) => (
                <UserItem key={index} dataUserItem={it} />
            ))}
        </div>
    );
}

export default Home;
