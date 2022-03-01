import { gql } from '../../utils/graphqlClient';
const LUNG_CARCINOMA_ASSOCIATED_TARGETS = gql`
  query lungCarcinomaAssociatedTargets {
        disease(efoId:"EFO_0001071"){
            associatedTargets (page:{index:0, size:25}){
                rows{
                    target{
                        id
                        approvedSymbol
                        approvedName
                    }
                    score
                }
            }
        }
    }
`;

export default LUNG_CARCINOMA_ASSOCIATED_TARGETS;