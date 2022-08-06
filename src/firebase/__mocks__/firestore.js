export const getUserById = jest.fn(() => Promise.resolve({}));

// Subir publicaciones del usuario a firestore
export const loadPublications = jest.fn(() => {});
export const deletePost = jest.fn(() => {});
export const updatePost = jest.fn(() => {});
// eslint-disable-next-line max-len
// preguntar el querysnapshot
// export const actualizarPosts = jest.fn((callback) => Promise.resolve([{ data: () => { callback()} }]));
export const actualizarPosts = async (callback) => {
  callback([{
    data: () => ({
      likes: [],
    }),
    id: '123',
  }]);
};

// export const actualizarPosts = jest.fn((callback) => Promise.resolve( {callback:[{data: ()=>'hola',id:'hola'} ] }));

export const createNewUser = () => Promise.resolve();

// () => Promise.resolve({});
