import { gql } from '../../utils/graphqlClient';

const LUNG_CARCINOMA_ASSOCIATED_TARGETS = gql`
  query lungCarcinomaAssociatedTargets($id: String!) {
        disease(efoId: $id){
            associatedTargets (page:{index:0, size:10}, orderByScore: "score"){
                rows{
                    target{
                        id
                        approvedSymbol
                        approvedName
                    }
                    score
                    datatypeScores{
                        id
                        score
                    }
                }
            }
        }
    }
`;

export default LUNG_CARCINOMA_ASSOCIATED_TARGETS;