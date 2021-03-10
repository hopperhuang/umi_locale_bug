/** 权限管理 */
export default function (initialState) {
  const { currentUser } = initialState;

  return {
    // canReadFoo: true,
    // canUpdateFoo: role === 'admin',
    // canDeleteFoo: foo => {
    //   return foo.ownerId === userId;
    // },
    canReadIndex: currentUser && currentUser.name === 'my_manager',
  };
}
