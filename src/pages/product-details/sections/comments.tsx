import { Product } from '../../product-list/types.ts';
import { Rating } from '../../../components/rating';
import styled from 'styled-components';

type Props = {
  comments?: Product['reviews'];
};

export function Comments({ comments }: Props) {

  return (
    <Container>
      <h2>Customer Reviews</h2>
      {comments?.map((comment, index) => (
        <Comment key={index}>
          <Header>
            <ReviewerName>{comment.reviewerName}</ReviewerName>
            <Section>
              <Rating rating={comment.rating} />
              <div>{new Date(comment.date).toLocaleDateString()}</div>
            </Section>
          </Header>
          <CommentBody>{comment.comment}</CommentBody>
        </Comment>
      ))}
    </Container>
  );
}


const Container = styled.div`
    margin-top: 20px;
    padding: 10px 0;
    border-top: 1px solid #e0e0e0;
    color: #004aad;
`;

const Comment = styled.div`
    padding: 10px 0;
    border-bottom: 1px solid #e0e0e0;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 700;
`;

const ReviewerName = styled.span`
    color: #333;
`;

const Section = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    color: #888;
    margin-left: auto;
    font-size: 0.9em;
`;

const CommentBody = styled.p`
    margin: 5px 0 0;
    color: #555;
`;