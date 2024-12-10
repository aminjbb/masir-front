import axios from 'axios'
import VueCookies from "vue-cookies";
import {gql} from 'nuxt-graphql-request';

export const strict = false
export const state = () => ({
  addressMapModal: false,
  addressModal: false,
  myProduct: [],
  product: null,
  clientOrders: [],
  clientMessage: [],
  myProjects: [],
  myProject: null,
  clientProduct: null,
  clientBlogPosts: [],
  clientBlogPost: null,
  clientSingleMessage:[],
  clientMe:null,
  clientProject:[],
  neighborhoods:[],
  employeeMyApplies:[],
  userAddress:[],
  addressForEdit:null,
  productCategories:[]
})

export const mutations = {
  set_productCategories(state , obj){
    state.productCategories = obj
  },
  set_addressForEdit(state , obj){
    state.addressForEdit = obj
  },
  set_userAddress( state  , obj){
    state.userAddress= obj
  },
  set_employeeMyApplies(state , obj){
    state.employeeMyApplies = obj
  },
  set_neighborhoods(state , obj){
    state.neighborhoods = obj
  },
  set_clientProject(state , obj){
    state.clientProject = obj
  },
  set_clientMe(state , obj){
    state.clientMe = obj
  },
  set_clientSingleMessage(state , obj){
    state.clientSingleMessage = obj
  },
  set_clientBlogPost(state, obj) {
    state.clientBlogPost = obj
  },
  set_clientBlogPosts(state, obj) {
    state.clientBlogPosts = obj
  },
  set_product(state, obj) {
    state.myProduct = obj
  },
  set_myProject(state, obj) {
    state.myProduct = obj
  },
  set_clientProduct(state, obj) {
    state.clientProduct = obj
  },
  set_myProjects(state, obj) {
    state.myProjects = obj
  },
  set_clientMessages(state, obj) {
    state.clientMessages = obj
  },
  set_clientOrders(state, obj) {
    state.clientOrders = obj
  },

  set_addressMapModal(state, bool) {
    state.addressMapModal = bool
  },
  set_addressModal(state, bool) {
    state.addressModal = bool
  },
  set_myProduct(state, obj) {
    state.myProduct = obj
  },

}
export const actions = {
  async set_productCategories({commit}){
    const requestHeaders = {
      Authorization: "Bearer " + VueCookies.get("userToken"),
    };
    const query = gql`
          query{
            clientProductCategories{
                results{
                    id,
                 name
                }
              }
            } `;
    const obj = await this.$graphql.default.request(query, {}, requestHeaders);
    commit('set_productCategories', obj?.clientProductCategories?.results);
  },
  async set_userAddress({commit}){
    const requestHeaders = {
      Authorization: "Bearer " + VueCookies.get("userToken"),
    };
    const query = gql`
          query{
            clientAddresses{
                results{
                id,
                city{name , id , province{ id , name ,cities{id , name}}},
                addressDetail,
                postalCode,
                no, unit
                }
              }
            } `;
    const obj = await this.$graphql.default.request(query, {}, requestHeaders);
    commit('set_userAddress', obj?.clientAddresses?.results);
  },
  async set_employeeMyApplies({commit}){
    const requestHeaders = {
      Authorization: "Bearer " + VueCookies.get("userToken"),
    };
    const query = gql`
          query{
            employeeMyApplies{
                results{
                  CreatedAt,
                  UpdatedAt,
                  confirmedAt,
                  finishedAt,
                  rejectedAt,
                  rating,
                  project{
                    name,
                    id,
                    predictedStartDate,
                    city{id,name}
                    neighborhood{id , name}
                    employer{
                      id,
                      user{
                        id,
                        firstName,
                        lastName,
                        thumbnail,
                        sex
                      }
                    }
                    name,
                    description,
                    city{
                      id,name,
                      province{id,name}
                    }
                    neighborhood{
                      id,name,
                      city{
                        id, name
                      }
                    }
                    predictedStartDate,
                    predictedCompletionDate,
                    isPublished,
                    projectServices{
                      service{
                        id, name ,
                      }
                    }
                    images{
                      id,
                      image
                    }
                    projectServiceRequirements{
                      serviceRequirement{
                        id,
                        requirement
                      }
                      value,

                    }
                  }
                }
              }
            } `;
    const obj = await this.$graphql.default.request(query, {}, requestHeaders);
    commit('set_employeeMyApplies', obj?.employeeMyApplies);
  },
  async set_neighborhoods({commit}) {
    const requestHeaders = {
      Authorization: "Bearer " + VueCookies.get("userToken"),
    };
    const query = gql`
          query{
            clientNeighborhoods{
             id,
              name,
            }
            } `;
    const obj = await this.$graphql.default.request(query, {}, requestHeaders);
    commit('set_neighborhoods', obj?.clientNeighborhoods);
  },
  async set_clientProject({commit} , filter) {
    const requestHeaders = {
      Authorization: "Bearer " + VueCookies.get("userToken"),
    };
    const query = gql`
          query{
             publishedProjects(limit:20${filter}){
                 results{
                    name,
                    id,
                    predictedStartDate,
                    city{id,name}
                    neighborhood{id , name}
                    projectApplies{
                     project{
                        id
                        name
                        description
                        city{
                          name
                        }
                        neighborhood{
                          name
                        }
                        predictedStartDate
                        predictedCompletionDate
                      }
                      confirmedAt
                      rating
                    }


                 }
              }
            } `;
    const obj = await this.$graphql.default.request(query, {}, requestHeaders);
    if (obj.clientEmployees?.results?.length){
      let clientProjectForm= []
      obj.clientEmployees?.results.forEach(element=>{
        clientProjectForm.push( element.projectApplies)
      })
    }
    commit('set_clientProject', clientProjectForm);
  },
  async set_clientBlogPost({commit} , id) {
    const requestHeaders = {
      Authorization: "Bearer " + VueCookies.get("userToken"),
    };
    const query = gql`
          query{
             clientBlogPostById(postId:${id}){
                 id
                    CreatedAt
                    UpdatedAt
                    pageTitle
                    metaDescription
                    metaTitle
                    metaTags
                    keywords
                    canonical
                    schema
                    nofollow
                    noindex
                    mainTitle
                    description
                    image
                    url
                    viewsCount
                    createdBy{
                      user{
                        id
                        firstName
                        lastName
                      }
                    }
              }
            } `;
    const obj = await this.$graphql.default.request(query, {}, requestHeaders);
    commit('set_clientBlogPost', obj.clientBlogPostById);
  },
  async set_clientBlogPosts({commit}) {
    const requestHeaders = {
      Authorization: "Bearer " + VueCookies.get("userToken"),
    };
    const query = gql`
          query{
             clientBlogPosts(limit:1000){
                  results{
                    id
                    CreatedAt
                    UpdatedAt
                    pageTitle
                    metaDescription
                    metaTitle
                    metaTags
                    keywords
                    canonical
                    schema
                    nofollow
                    noindex
                    mainTitle
                    description
                    image
                    url
                    viewsCount
                    createdBy{
                      user{
                        id
                        firstName
                        lastName
                      }
                    }
                }
              }
            } `;
    const obj = await this.$graphql.default.request(query, {}, requestHeaders);
    commit('set_clientBlogPosts', obj.clientBlogPosts.results);
  },
  async set_clientProduct({commit}, id) {
    const requestHeaders = {
      Authorization: "Bearer " + VueCookies.get("userToken"),
    };
    const query = gql`
          query{
              clientProduct(productId:${id}){
                  id,
                  pageTitle,
                  metaDescription,
                  metaTitle,
                  metaTags,
                  keywords,
                  canonical,
                  schema,
                  nofollow,
                  noindex,
                  persianName,
                  englishName,
                  description,
                  price,
                  images{
                    image
                  }
                  imageCover{image}
                  seller{
                    id
                    user{
                      firstName
                      lastName
                    }
                    officialseller{
                      slug
                      name
                    }
                    mobile
                  }
              }
            } `;
    const obj = await this.$graphql.default.request(query, {}, requestHeaders);
    commit('set_clientProduct', obj.clientProduct);
  },
  async set_myProject({commit}, id) {
    const requestHeaders = {
      Authorization: "Bearer " + VueCookies.get("userToken"),
    };
    const query = gql`
          query{
             myProject(projectId:${id}){
                   id
                    employer{
                      id
                      user{
                      id
                      firstName
                      lastName
                      }
                    }
                    name
                    city{name,id}
                    neighborhood{
                      id
                      city{
                        name
                        id
                      }
                      name
                    }
                    predictedStartDate
                    predictedCompletionDate
                    isPublished
                    projectServices{
                      service{
                        id
                        name
                        requirements{
                          id
                          requirement
                          valueType
                        }
                      }
                      budget
                    }
                    projectServiceRequirements{
                      serviceRequirement{
                        id
                        requirement
                      }
                      value
                    }
              }
            } `;
    const obj = await this.$graphql.default.request(query, {}, requestHeaders);
    commit('set_myProject', obj.myProject);
  },
  async set_myProjects({commit}) {
    const requestHeaders = {
      Authorization: "Bearer " + VueCookies.get("userToken"),
    };
    const query = gql`
          query{
             myProjects(limit:1000){
                  results{
                    id
                    employer{
                      id
                      user{
                      id
                      firstName
                      lastName
                      }
                    }
                    name
                    city{name,id}
                    neighborhood{
                      id
                      city{
                        name
                        id
                      }
                      name
                    }
                    predictedStartDate
                    predictedCompletionDate
                    isPublished
                    projectServices{
                      service{
                        id
                        name
                      }
                      budget
                    }
                    projectServiceRequirements{
                      serviceRequirement{
                        id
                        requirement
                      }
                      value
                    }
                }
              }
            } `;
    const obj = await this.$graphql.default.request(query, {}, requestHeaders);
    commit('set_myProjects', obj.myProjects.results);
  },
  async set_clientOrders({commit}) {
    const requestHeaders = {
      Authorization: "Bearer " + VueCookies.get("userToken"),
    };
    const query = gql`
          query{
              clientOrders(limit:1000){
                  results{
                    id
                    totalPriceWithoutDiscount
                    deliveryPrice
                    packagePrice
                    totalItemsPrice
                    totalPrice
                    currentStatus
                    details{
                      product{
                        id
                        pageTitle
                        metaDescription
                        metaTitle
                        metaTags
                        keywords
                        canonical
                        schema
                        nofollow
                        noindex
                        persianName
                        englishName
                        description
                        price
                        categories{name}
                        images{image}
                        imageCover{image}
                      }
                      quantity
                      withoutDiscountUnitPrice
                      unitPrice
                    }
                }
              }
            } `;
    const obj = await this.$graphql.default.request(query, {}, requestHeaders);
    commit('set_clientMessages', obj.clientMessages.results);
  },
  async set_clientSingleMessage({commit} ,form) {
    const requestHeaders = {
      Authorization: "Bearer " + VueCookies.get("userToken"),
    };
    const query = gql`
          query{
             clientMessages(limit:1000,room_Users_In:[${form.id}]){
                  results{
                    sender{
                      id
                      firstName
                      lastName
                    }
                    message
                }
              }
            } `;
    const obj = await this.$graphql.default.request(query, {}, requestHeaders);
    commit('set_clientSingleMessage', obj.clientMessages?.results);
  },
  async set_clientMessages({commit}) {
    const requestHeaders = {
      Authorization: "Bearer " + VueCookies.get("userToken"),
    };
    const query = gql`
          query{
             clientMessages(limit:1000){
                  results{
                    sender{
                      id
                      firstName
                      lastName
                    }
                    message
                }
              }
            } `;
    const obj = await this.$graphql.default.request(query, {}, requestHeaders);
    commit('set_clientOrders', obj.clientMessages.results);
  },
  async set_myProduct({commit}) {
    const requestHeaders = {
      Authorization: "Bearer " + VueCookies.get("userToken"),
    };
    const query = gql`
          query{
              myProducts(limit:1000){
                  results{
                  id,
                  CreatedAt,
                  UpdatedAt,
                  pageTitle,
                  metaDescription,
                  metaTitle,
                  metaTags,
                  keywords,
                  canonical,
                  schema,
                  nofollow,
                  noindex,
                  persianName,
                  englishName,
                  description,
                  price,
                  images{
                    image
                  }
                  imageCover{image}

                }
              }
            } `;
    const obj = await this.$graphql.default.request(query, {}, requestHeaders);
    commit('set_myProduct', obj.myProducts.results);
  },
  async set_product({commit}, id) {
    const requestHeaders = {
      Authorization: "Bearer " + VueCookies.get("userToken"),
    };
    const query = gql`
          query{
              myProduct(productId:${id}){
                  id,
                  CreatedAt,
                  UpdatedAt,
                  pageTitle,
                  metaDescription,
                  metaTitle,
                  metaTags,
                  keywords,
                  canonical,
                  schema,
                  nofollow,
                  noindex,
                  persianName,
                  englishName,
                  description,
                  price,
                  images{
                    image
                  }
                  imageCover{image}
                  seller{
                    mobile
                    user{
                      id
                      firstName
                      lastName
                    }
                  }
              }
            } `;
    const obj = await this.$graphql.default.request(query, {}, requestHeaders);
    commit('set_product', obj.myProduct);
  }
}
export const getters = {
  get_productCategories(state ){
   return  state.productCategories
  },
  get_employeeMyApplies(state){
   return  state.employeeMyApplies
  },
  get_addressForEdit(state ){
    return  state.addressForEdit
  },
  get_userAddress( state){
    return   state.userAddress
  },
  get_neighborhoods(state){
   return  state.neighborhoods
  },
  get_clientProject(state){
    return  state.clientProject
  },

  get_clientMe(state ){
    return  state.clientMe
  },

  get_clientSingleMessage(state){
    return state.clientSingleMessage
  },
  get_clientBlogPost(state) {
    return state.clientBlogPost
  },
  get_clientBlogPosts(state) {
    return state.clientBlogPosts
  },
  get_product(state, obj) {
    return state.myProduct
  },
  get_myProject(state) {
    return state.myProduct
  },
  get_clientProduct(state) {
    return state.clientProduct
  },
  get_myProjects(state) {
    return state.myProjects
  },
  get_clientMessages(state) {
    return state.clientMessages
  },
  get_clientOrders(state) {
    return state.clientOrders
  },
  get_addressMapModal(state) {
    return state.addressMapModal
  },
  get_addressModal(state) {
    return state.addressModal
  },
  get_myProduct(state) {
    return state.myProduct
  }

}
