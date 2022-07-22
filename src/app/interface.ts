export interface HomePage{
  data:{
    id:number;
    attributes:{
      Name:string;
      Email:string;
      Cellphone:string;
      Website:string;
      BioSummary:string;
      FullBio:string;
      LinkedIn:string;
      Github:string;
      Behance:string;
      Logo:{
        data:{
          attributes:{
            url:string;
          }
        }
      },
      WebsiteHeroImage:{
        data:{
          attributes:{
            url:string;
            height:number;
            width:number;
          }
        }
      }
    }
  }
}


export interface Skill{



          id:number;
          attributes:{
            SkillName:string;
            SkillScore:string;
            SkillLogo:{
                data:{
                  attributes:{
                    formats:{
                      thumbnail:{
                        url:string;
                        width:number;
                        height:number;
                      }
                    }
                  }
                }
            }

          }






}


export interface Skills{
  data:Skill[];
}




// export interface Project{
//   id:number;
//   attributes:{
//     Title:string;
//     Summary:string;
//     Description:string;
//     Weblink:string;
//     Trailer:string;
//     StartData:string;
//     EndDate:string;
//     ClientName:string;
//     Category:string;
//     Slug:string;
//     Image:{
//       data:{
//         attributes:{
//           formats:{
//             thumbnail:{
//               url:string;
//               width:number;
//               height:number;
//             }
//           }
//         }
//       }
//     }
//     skills:Skills

//   }
// }

export interface Projects{

    data:ProjectDetail[];




}


export interface ProjectDetail{
data:[{
  id:number;
  attributes:{
    Title:string;
    Summary:string;
    Description:string;
    WebLink:string;
    Trailer:string;
    StartDate:string;
    EndDate:string;
    ClientName:string;
    Category:string;
    Slug:string;
    Tagline:string;
    MainImage:{
        data:{
          attributes:{
            formats:{
              medium:{
                url:string;
              }
              thumbnail:{
                url:string;

              }

              }
          }



    }
  };skills:{
      data:[
        {
          attributes:{
            SkillName:string;
            SkillScore:string;
            SkillLogo:{
              data:{
                attributes:{

                    url:string;

                }
              }
            }

          }
        }
      ]
    }
  ;Images:{
         data:[{
          attributes:{
            formats:{
              large:{
                url:string
              }
            }
          }
         }
        ]
    }

}
}
]
}




// export interface ProjectDetails{
//   data:
//     ProjectDetail

// }
