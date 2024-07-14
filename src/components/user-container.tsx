import { userApi } from "../features/user-service";

const UserContainer = () => {
	const { data: users, error, isLoading } = userApi.useGetUsersQuery(3);

	return (
		<div>
			<div className="users__list">
				{
					isLoading && (<p>Loading...</p>)
				}
				{
					error && (<p>There is some error!</p>)
				}
				<table border={"1"}>
					<thead>
						<tr>
							<td>ID</td>
							<td>Name</td>
							<td>Email</td>
						</tr>
					</thead>
					<tbody>
						{
							!isLoading && users.map(item => (
								<tr key={item.id}>
									<td>{item.id}</td>
									<td>{item.name}</td>
									<td>{item.email}</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
		</div>
	);

};

export default UserContainer;