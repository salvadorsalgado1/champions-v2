"""increased position string length

Revision ID: a0dbe8bb4d63
Revises: 1578d14f988a
Create Date: 2019-09-09 21:07:01.235773

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'a0dbe8bb4d63'
down_revision = '1578d14f988a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('player', 'assists',
               existing_type=sa.REAL(),
               type_=sa.Float(precision=21),
               existing_nullable=True)
    op.alter_column('player', 'blocks',
               existing_type=sa.REAL(),
               type_=sa.Float(precision=21),
               existing_nullable=True)
    op.alter_column('player', 'def_reb',
               existing_type=sa.REAL(),
               type_=sa.Float(precision=21),
               existing_nullable=True)
    op.alter_column('player', 'field_goal_attempted',
               existing_type=postgresql.DOUBLE_PRECISION(precision=53),
               type_=sa.Float(precision=31),
               existing_nullable=True)
    op.alter_column('player', 'field_goal_made',
               existing_type=postgresql.DOUBLE_PRECISION(precision=53),
               type_=sa.Float(precision=31),
               existing_nullable=True)
    op.alter_column('player', 'field_goal_pct',
               existing_type=sa.REAL(),
               type_=sa.Float(precision=21),
               existing_nullable=True)
    op.alter_column('player', 'free_throw_attempted',
               existing_type=postgresql.DOUBLE_PRECISION(precision=53),
               type_=sa.Float(precision=31),
               existing_nullable=True)
    op.alter_column('player', 'free_throw_made',
               existing_type=postgresql.DOUBLE_PRECISION(precision=53),
               type_=sa.Float(precision=31),
               existing_nullable=True)
    op.alter_column('player', 'free_throw_pct',
               existing_type=sa.REAL(),
               type_=sa.Float(precision=21),
               existing_nullable=True)
    op.alter_column('player', 'off_reb',
               existing_type=sa.REAL(),
               type_=sa.Float(precision=21),
               existing_nullable=True)
    op.alter_column('player', 'points',
               existing_type=sa.REAL(),
               type_=sa.Float(precision=21),
               existing_nullable=True)
    op.alter_column('player', 'position',
               existing_type=sa.VARCHAR(length=20),
               type_=sa.String(length=100),
               existing_nullable=True)
    op.alter_column('player', 'steals',
               existing_type=sa.REAL(),
               type_=sa.Float(precision=21),
               existing_nullable=True)
    op.alter_column('player', 'three_pt_attempted',
               existing_type=postgresql.DOUBLE_PRECISION(precision=53),
               type_=sa.Float(precision=31),
               existing_nullable=True)
    op.alter_column('player', 'three_pt_made',
               existing_type=postgresql.DOUBLE_PRECISION(precision=53),
               type_=sa.Float(precision=31),
               existing_nullable=True)
    op.alter_column('player', 'three_pt_pct',
               existing_type=sa.REAL(),
               type_=sa.Float(precision=21),
               existing_nullable=True)
    op.alter_column('player', 'tot_reb',
               existing_type=sa.REAL(),
               type_=sa.Float(precision=21),
               existing_nullable=True)
    op.alter_column('player', 'true_stg_pct',
               existing_type=sa.REAL(),
               type_=sa.Float(precision=21),
               existing_nullable=True)
    op.alter_column('player', 'turnovers',
               existing_type=sa.REAL(),
               type_=sa.Float(precision=21),
               existing_nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('player', 'turnovers',
               existing_type=sa.Float(precision=21),
               type_=sa.REAL(),
               existing_nullable=True)
    op.alter_column('player', 'true_stg_pct',
               existing_type=sa.Float(precision=21),
               type_=sa.REAL(),
               existing_nullable=True)
    op.alter_column('player', 'tot_reb',
               existing_type=sa.Float(precision=21),
               type_=sa.REAL(),
               existing_nullable=True)
    op.alter_column('player', 'three_pt_pct',
               existing_type=sa.Float(precision=21),
               type_=sa.REAL(),
               existing_nullable=True)
    op.alter_column('player', 'three_pt_made',
               existing_type=sa.Float(precision=31),
               type_=postgresql.DOUBLE_PRECISION(precision=53),
               existing_nullable=True)
    op.alter_column('player', 'three_pt_attempted',
               existing_type=sa.Float(precision=31),
               type_=postgresql.DOUBLE_PRECISION(precision=53),
               existing_nullable=True)
    op.alter_column('player', 'steals',
               existing_type=sa.Float(precision=21),
               type_=sa.REAL(),
               existing_nullable=True)
    op.alter_column('player', 'position',
               existing_type=sa.String(length=100),
               type_=sa.VARCHAR(length=20),
               existing_nullable=True)
    op.alter_column('player', 'points',
               existing_type=sa.Float(precision=21),
               type_=sa.REAL(),
               existing_nullable=True)
    op.alter_column('player', 'off_reb',
               existing_type=sa.Float(precision=21),
               type_=sa.REAL(),
               existing_nullable=True)
    op.alter_column('player', 'free_throw_pct',
               existing_type=sa.Float(precision=21),
               type_=sa.REAL(),
               existing_nullable=True)
    op.alter_column('player', 'free_throw_made',
               existing_type=sa.Float(precision=31),
               type_=postgresql.DOUBLE_PRECISION(precision=53),
               existing_nullable=True)
    op.alter_column('player', 'free_throw_attempted',
               existing_type=sa.Float(precision=31),
               type_=postgresql.DOUBLE_PRECISION(precision=53),
               existing_nullable=True)
    op.alter_column('player', 'field_goal_pct',
               existing_type=sa.Float(precision=21),
               type_=sa.REAL(),
               existing_nullable=True)
    op.alter_column('player', 'field_goal_made',
               existing_type=sa.Float(precision=31),
               type_=postgresql.DOUBLE_PRECISION(precision=53),
               existing_nullable=True)
    op.alter_column('player', 'field_goal_attempted',
               existing_type=sa.Float(precision=31),
               type_=postgresql.DOUBLE_PRECISION(precision=53),
               existing_nullable=True)
    op.alter_column('player', 'def_reb',
               existing_type=sa.Float(precision=21),
               type_=sa.REAL(),
               existing_nullable=True)
    op.alter_column('player', 'blocks',
               existing_type=sa.Float(precision=21),
               type_=sa.REAL(),
               existing_nullable=True)
    op.alter_column('player', 'assists',
               existing_type=sa.Float(precision=21),
               type_=sa.REAL(),
               existing_nullable=True)
    # ### end Alembic commands ###